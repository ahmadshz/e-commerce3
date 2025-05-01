import React, { useState, useEffect } from "react";
import { BiMessageRounded } from "react-icons/bi";
import { BsFillSendFill } from "react-icons/bs";
import axios from "axios";
import { baseUrl } from "../../../Api/Api";
import Cookies from "universal-cookie";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ar";
import { useNavigate } from "react-router-dom";

dayjs.extend(relativeTime);
dayjs.locale("ar");

const CommentBox = ({ adId }) => {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [visibleCount, setVisibleCount] = useState(5);
    const [replyIndex, setReplyIndex] = useState(null);
    const [replyText, setReplyText] = useState("");
    const [replies, setReplies] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const cookies = new Cookies();
    const token = cookies.get("auth_token");

    const navigate = useNavigate()

    useEffect(() => {
        const fetchComments = async () => {
            try {
                setLoading(true);
                const res = await axios.get(`${baseUrl}/comments/${adId}`);
                setComments(res.data);
            } catch (err) {
                console.error(err);
                setError("فشل تحميل التعليقات");
            } finally {
                setLoading(false);
            }
        };

        fetchComments();
    }, [adId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (comment.trim() === "") return;

        try {
            const res = await axios.post(
                `${baseUrl}/comments/${adId}`,
                { content: comment },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setComments((prev) => [...prev, res.data]);
            setComment("");
        } catch (err) {
            console.error(err);
            if (err.response?.data?.message === "Invalid or expired token") {
                navigate("/login");
            }
        }
    };

    const displayedComments = [...comments].slice(-visibleCount);

    const handleShowMore = () => {
        setVisibleCount((prev) => Math.min(prev + 5, comments.length));
    };

    return (
        <div className="w-full mx-auto ">
        <div className="mt-6">
            <h3 className="text-base md:text-lg font-semibold mb-2">التعليقات:</h3>
    
            {visibleCount < comments.length && (
                <button
                    className="mt-4 text-sm w-full bg-primary text-white p-[16px] mb-6 rounded-10px"
                    onClick={handleShowMore}
                >
                    عرض أقدم
                </button>
            )}
    
            {loading ? (
                <p className="text-sm text-gray-500">جارٍ التحميل...</p>
            ) : error ? (
                <p className="text-sm text-red-500">{error}</p>
            ) : displayedComments.length === 0 ? (
                <p className="text-xs text-border">لا توجد تعليقات حتى الآن.</p>
            ) : (
                displayedComments.map((c, index) => (
                    <li key={index} className="bg-[#f7f7f7d1] rounded-10px mb-3 list-none">
                        <div className="p-[16px] leading-5 border-b-2">
                            <div className="flex flex-col">
                                <span className="text-xs md:text-sm">{c.userId.username || "مستخدم"}</span>
                                <span className="text-xs md:text-sm">{dayjs(c.createdAt).fromNow()}</span>
                            </div>
                        </div>
    
                        <div className="p-[16px] flex flex-col gap-3">
                            <span className="text-base md:text-lg">{c.content}</span>
    
                            <div
                                className="border-2 px-6 py-2 rounded-[20px] w-fit text-sm md:text-base flex items-center gap-1 text-border cursor-pointer"
                                onClick={() => setReplyIndex(index === replyIndex ? null : index)}
                            >
                                <BiMessageRounded size={20} />
                                الرد
                            </div>
    
                            {replyIndex === index && (
                                <div className="mt-3">
                                    <textarea
                                        className="border p-2 rounded w-full text-sm focus:border-primary outline-none"
                                        rows="2"
                                        placeholder="اكتب ردك هنا..."
                                        value={replyText}
                                        onChange={(e) => setReplyText(e.target.value)}
                                    />
                                    <button
                                        className="mt-2 px-4 py-1 text-sm bg-primary text-white rounded"
                                        onClick={() => {
                                            if (replyText.trim() === "") return;
                                            setReplies((prev) => ({
                                                ...prev,
                                                [index]: [...(prev[index] || []), replyText],
                                            }));
                                            setReplyText("");
                                            setReplyIndex(null);
                                        }}
                                    >
                                        إرسال الرد
                                    </button>
                                </div>
                            )}
    
                            {replies[index] && (
                                <ul className="mt-2 pl-4 space-y-1 border-l border-gray-300">
                                    {replies[index].map((reply, i) => (
                                        <li key={i} className="text-sm ">{reply}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </li>
                ))
            )}
        </div>
    
        <h2 className="text-lg md:text-xl font-semibold my-4">أضف تعليقًا</h2>
    
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
            <textarea
                className="border p-[16px] h-[160px] lg:h-[182px] rounded-10px resize-none text-sm md:text-base focus:outline-none focus:border-primary"
                placeholder="اكتب تعليقك هنا..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <button
                type="submit"
                className="bg-primary rounded-10px w-fit text-white text-sm md:text-base py-2 px-8 flex items-center gap-1"
            >
                إرسال
                <BsFillSendFill />
            </button>
        </form>
    </div>
    
    );
};

export default CommentBox;
