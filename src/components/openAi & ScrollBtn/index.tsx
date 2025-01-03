"use client";

import React, { useState, useEffect, useRef } from 'react';
import toast from 'react-hot-toast';
import { handleInputChange } from '../../core/validation/forbiddenWords';


interface Message {
    sender: 'user' | 'bot';
    text: string;
}
const currentDate = new Date();
const daysOfWeek = ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'];
const dayOfWeek = daysOfWeek[currentDate.getDay()];
const date = currentDate.getDate().toLocaleString('fa-IR');
const month = currentDate.toLocaleString('fa-IR', { month: 'long' }); // ماه به زبان فارسی

const responses: { [key: string]: string | string[] } = {
    'سلام': 'سلام! چطور می‌توانم به شما کمک کنم؟',
    'خوبی؟': 'من یک هوش مصنوعی هستم و احساس ندارم',
    'چطوری؟': 'من یک هوش مصنوعی هستم و احساس ندارم',
    'چطوری': 'من یک هوش مصنوعی هستم و احساس ندارم',
    'خوبی': 'من یک هوش مصنوعی هستم و احساس ندارم',
    'حالت چطوره': 'من یک هوش مصنوعی هستم و حالت خاصی ندارم',
    'امروز چند شنبه است': `امروز ${dayOfWeek} است.`,
    'امروز چندم ماهه': `امروز ${date} ${month} است.`,
    'امروز چندم ماه است': `امروز ${date} ${month} است.`,
    'الان در چه ماهی هستیم': `امروز ${date} ${month} است.`,
    'در چه ماهی هستیم': `امروز ${date} ${month} است.`,
    'چی هستی؟': 'من یک چت‌بات هستم که به سوالات شما پاسخ می‌دهد.',
    'چی هستی': 'من یک چت‌بات هستم که به سوالات شما پاسخ می‌دهد.',
    'ایا تو یک هوش مصنوعی هستی': 'بله . من یک چت‌بات هستم که به سوالات شما پاسخ می‌دهد.',
    'ایا تو یک هوش مصنوعی هستی؟': 'بله . من یک چت‌بات هستم که به سوالات شما پاسخ می‌دهد.',
    'سوال دیگه': 'می‌توانید سوال دیگری بپرسید!',
    'آب و هوا چطوره؟': 'بهترین کار برای اطلاع از آب و هوا، چک کردن وب‌سایت‌های معتبر است.',
    'مشاوره می‌خواهم': 'لطفا بفرمایید در چه موردی مشاوره می‌خواهید. من در زمینه‌های مختلف به شما کمک می‌کنم.',
    'چطور می‌توانم با شما تماس بگیرم؟': 'متاسفانه من نمی‌توانم تماس تلفنی برقرار کنم. اما می‌توانید در اینجا سوالات خود را بپرسید.',
    'به چه سوالاتی پاسخ می‌دهی؟': 'من می‌توانم به سوالات عمومی، اطلاعات در مورد خودم و مشاوره‌هایی در زمینه‌های مختلف پاسخ دهم.',
    'مشکلات من را حل کن': [
        'برخی از مشکلات نیاز به مشاوره تخصصی دارند. لطفا سوال دقیق‌تری بپرسید.',
        'من می‌توانم به شما راه‌های عمومی را معرفی کنم، اما برای مشکلات خاص باید به یک متخصص مراجعه کنید.',
        'برای حل مشکلات عاطفی و روانی بهتر است از مشاوران حرفه‌ای کمک بگیرید.'
    ],
    'برو': 'اگر نمی‌خواهید صحبت کنید، می‌توانید هر زمان که خواستید برگردید.',
    'کجا هستی؟': 'من در دنیای دیجیتال هستم و فقط به سوالات شما پاسخ می‌دهم!',
    'دربارهٔ خودت بگو': 'من یک چت‌بات هستم و برای پاسخ به سوالات شما و کمک به شما طراحی شده‌ام.',
    'من غمگینم': 'متوجه‌ام. مهم است که در این شرایط به خودتان توجه کنید و با کسی که قابل اعتماد است صحبت کنید.',
    'خسته‌ام': 'استراحت کنید! کمی وقت بگذارید و به خودتان استراحت دهید.',
    'با من صحبت کن': 'من اینجا هستم تا با شما صحبت کنم، احساس خود را با من در میان بگذارید.',
    'گزارش': 'لطفا به صفحهٔ تماس با ما بروید و نظر خود را ارسال کنید تا در سریع‌ترین حالت این مشکل را حل کنم.',
    'مشکل': 'لطفا به صفحهٔ تماس با ما بروید و نظر خود را ارسال کنید تا در سریع‌ترین حالت این مشکل را حل کنم.',
    'خطا': 'لطفا به صفحهٔ تماس با ما بروید و نظر خود را ارسال کنید تا در سریع‌ترین حالت این مشکل را حل کنم.',
    'ایراد': 'لطفا به صفحهٔ تماس با ما بروید و نظر خود را ارسال کنید تا در سریع‌ترین حالت این مشکل را حل کنم.',
    'تو انسان زنده‌ای؟': 'خیر! من یک هوش مصنوعی هستم.',
    'میتونی به من چیزی یاد بدی؟': 'بله! من می‌توانم در زمینه‌های مختلف به شما کمک کنم. دربارهٔ چه موضوعی نیاز به یادگیری دارید؟',
    'بهترین زبان برنامه نویسی در سال 2024 چیست؟': 'زبان‌های برنامه‌نویسی محبوب در سال 2024 شامل Python، JavaScript، و Go هستند. انتخاب بهترین زبان بستگی به پروژه و اهداف شما دارد.',
    'بهترین زبان برنامه نویسی در سال 2024': 'زبان‌های برنامه‌نویسی محبوب در سال 2024 شامل Python، JavaScript، و Go هستند. انتخاب بهترین زبان بستگی به پروژه و اهداف شما دارد.',
    'چیزی را برای من توضیح بده': 'کانستنت یکی از مهم‌ترین مفهوم‌ها در برنامه‌نویسی است که به معنای یک مقدار ثابت است.',
    'می‌تونی چیزی به من راجب برنامه‌نویسی یاد بده؟': 'این سایت مخصوص فروش دوره‌های برنامه‌نویسی است. می‌توانید دوره‌ی خود را از سایت‌های معروف مانند Udemy یا Coursera انتخاب کنید.',
    'ساعت چنده؟': 'متاسفانه من نمی‌توانم زمان واقعی را بگویم، اما می‌توانید با چک کردن ساعت دستگاهتان زمان را ببینید.',
    'شما چه سرویسی ارائه می‌دهید؟': 'ما دوره‌ها و مشاوره‌های آموزشی در زمینه‌های مختلف ارائه می‌دهیم. می‌توانید سوالات خود را بپرسید!',
    'چطور می‌توانم عضو سایت شوم؟': 'برای عضویت در سایت، لطفاً به صفحهٔ ثبت‌نام مراجعه کنید و مراحل را دنبال کنید.',
    'چطور دوره‌ها را خریداری کنم؟': 'برای خرید دوره‌ها، لطفاً دوره مورد نظر خود را انتخاب کنید و مراحل پرداخت را دنبال کنید.',
    'چطور می‌توانم نظر خود را درباره دوره‌ها ارسال کنم؟': 'لطفاً به صفحهٔ تماس با ما بروید و فرم ارسال نظر را پر کنید.',
    'اینجا چه خبری است؟': 'ما در اینجا دوره‌های جدید آموزشی و اخبار مرتبط با تکنولوژی را منتشر می‌کنیم. لطفاً سوالات خاص‌تری بپرسید!',  
    'چه خبر؟': 'اخبار جدید در اینجا در حال به روز رسانی است. آیا سوال خاصی دارید؟',
    'این سایت برای چی هست؟': 'این سایت به شما کمک می‌کند تا به سوالات خود پاسخ دهید و دوره‌های آموزشی را پیدا کنید.',
    'چرا این سایت طراحی شده است؟' : 'این سایت برای ارائه مشاوره و دوره‌های آموزشی به شما طراحی شده است.',
    'چرا این سایت طراحی شد' : 'این سایت برای ارائه مشاوره و دوره‌های آموزشی به شما طراحی شده است.',    
    'چگونه می‌توانم کمک بگیرم؟': 'شما می‌توانید سوالات خود را در اینجا بپرسید.',
    'من نیاز به اطلاعات دارم': 'لطفاً بفرمایید چه نوع اطلاعاتی نیاز دارید.',
    'آیا سؤال دیگری دارید؟': 'بله، من آماده‌ام تا به سوالات شما پاسخ دهم.' 
};


const programmingLanguages: { [key: string]: string } = {
    'JavaScript': 'JavaScript یک زبان برنامه‌نویسی است که عمدتاً برای ایجاد وب‌سایت‌های تعاملی استفاده می‌شود و از طریق مرورگرهای وب اجرا می‌شود.',
    'Python': 'Python یک زبان برنامه‌نویسی سطح بالا و چندمنظوره است که به‌طور گسترده در علم داده، یادگیری ماشین، وب‌سایت و برنامه‌نویسی عمومی استفاده می‌شود.',
    'Java': 'Java یک زبان برنامه‌نویسی شیءگراست که به‌طور گسترده در توسعه نرم‌افزار، به ویژه در برنامه‌های کاربردی سازمانی و اندروید استفاده می‌شود.',
    'C#': 'C# یک زبان برنامه‌نویسی شیءگرا است که عمدتاً برای توسعه نرم‌افزارهای تحت ویندوز و گیم‌سازی (با استفاده از Unity) مورد استفاده قرار می‌گیرد.',
    'C++': 'C++ یک زبان برنامه‌نویسی سطح پایین‌تر است که قدرت مدیریتی در منابع سیستم را فراهم می‌کند و عمدتاً در نرم‌افزارهای سیستم و بازی‌ها استفاده می‌شود.',
    'Go': 'Go یک زبان برنامه‌نویسی مدرن و ساده است که به خاطر عملکرد بالای خود شناخته می‌شود و عمدتاً در توسعه سرور و میکروسرویس‌ها استفاده می‌شود.',
    'Ruby': 'Ruby یک زبان برنامه‌نویسی عمومی و شیءگرا است که بیشتر برای توسعه وب با فریم‌ورک Ruby on Rails شناخته شده است.',

};


export const ChatBot : React.FC = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState<string>('');
    const [isChatOpen, setChatOpen] = useState<boolean>(false);
    const hasWelcomed = useRef(false);
    const [showScrollBtn, setShowScrollBtn] = useState<boolean>(false);
    const endOfMessagesRef = useRef<HTMLDivElement | null>(null);
    const [userMessageHistory, setUserMessageHistory] = useState<string[]>([]);

    useEffect(() => {
        if (!hasWelcomed.current) {
            setMessages((prev) => [
                ...prev,
                { sender: 'bot', text: 'خوش آمدید! من اینجا هستم تا به سوالات شما پاسخ بدهم. چه کمکی از من برمی‌آید؟' }
            ]);
            hasWelcomed.current = true;
        }

        const handleScroll = () => {
            if (window.scrollY > 0) {
                setShowScrollBtn(true);
            } else {
                setShowScrollBtn(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    useEffect(() => {
        endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSend = () => {
        if (input.trim()) {
            const userMessage = input.trim();
            setMessages((prev) => [...prev, { sender: 'user', text: userMessage }]);
            setUserMessageHistory((prevHistory) => [...prevHistory, userMessage]);
    
            // Check if the user message already exists in history
            if (userMessageHistory.includes(userMessage)) {
                setMessages((prev) => [
                    ...prev,
                    { sender: 'bot', text: 'من قبلاً به این سوال پاسخ دادم.' }
                ]);
                setInput('');
                return;
            }
    
            // Check responses first
            let botResponse: string = responses[userMessage]
                ? Array.isArray(responses[userMessage])
                    ? responses[userMessage][Math.floor(Math.random() * responses[userMessage].length)]
                    : responses[userMessage]
                : '';
    
            // Stop further execution if botResponse exists
            if (botResponse) {
                setMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
                setInput('');
                return;
            }
    
            let additionalResponses: string[] = [];
    
            // Date inquiries and other conditions
            if (userMessage.includes('برنامه‌نویسی')) {
                additionalResponses.push('می‌توانید دوره‌های آموزشی برنامه‌نویسی ما را در اینجا بررسی کنید: [لینک دوره‌ها]');
            }
            if (userMessage.includes('خسته‌ام')) {
                additionalResponses.push('آیا می‌خواهید درباره روش‌های آرامش بیشتر صحبت کنیم؟');
            }
    
            // Specific date inquiries
            if (userMessage.includes('امروز چند شنبه است؟')) {
                botResponse = `امروز ${dayOfWeek} است.`;
            } else if (userMessage.includes('امروز چندم ماه است؟')) {
                botResponse = `امروز ${date} ${month} است.`;
            } else if (userMessage.includes('در چه ماهی هستیم؟')) {
                botResponse = `ما در ماه ${month} هستیم.`;
            }
    
            // Report inquiries
            const keywords = ['گزارش', 'مشکل', 'خطا', 'ایراد'];
            if (keywords.some(keyword => userMessage.includes(keyword))) {
                botResponse = 'لطفا به صفحهٔ تماس با ما بروید و مشکل یا نظر خود را راجب سایت بگویید.';
            }
    
            // Check for mentioned programming languages
            const mentionedLanguages = Object.keys(programmingLanguages).filter(lang => userMessage.includes(lang));
            if (mentionedLanguages.length > 0) {
                botResponse += `\n`;
                mentionedLanguages.forEach(lang => {
                    botResponse += `${lang}: ${programmingLanguages[lang]}\n`;
                });
            }
    
            // Combine the bot response with the additional responses
            if (additionalResponses.length > 0) {
                botResponse += '\n' + additionalResponses.join('\n');
            }
    
            // If no response was found, show the default message
            if (!botResponse) {
                botResponse = 'متاسفانه پاسخ مشخصی برای این سوال ندارم.';
            }
    
            // Set message response
            setMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
            setInput('');
        } else {
            toast.error("لطفاً متن پیام را وارد کنید.");
        }
    };
    
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        handleInputChange(value, setInput, setErrorMessage); // اطمینان حاصل کنید که این تابع به درستی کار کند
    };

    const toggleChat = () => {
        setChatOpen(!isChatOpen);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };



    return (
        <div>
            {!isChatOpen ? (
                <div title='باته پشتیبان' onClick={toggleChat} className="hover:scale-105 fixed z-50 bottom-4 right-4 bg-[#166c6b] shadow-lg rounded-full p-3 cursor-pointer">
                    <span role="img" aria-label="consultant-icon" className="text-white text-3xl">💬</span>
                </div>
            ) : (
                <div className="fixed z-50 bottom-4 right-4 shadow-lg rounded-lg w-80 sm:w-96 p-4 border border-gray-400 bg-gray-200">
                    <div className="overflow-y-auto max-h-60">
                        {messages.map((msg, index) => (
                            <div key={index} className={`my-1 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                                <div className={`inline-block p-2 rounded-lg ${msg.sender === 'user' ? 'bg-[#177c7a] text-white' : 'bg-gray-300 text-black'}`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        <div ref={endOfMessagesRef} />
                    </div>
                    <div className="flex mt-2 justify-center gap-2">
                    <input
                            type="text"
                            className="w-[90%] border-gray-500 text-black border rounded-lg p-2 sm:p-3 md:p-2 focus:outline-none focus:ring-2 focus:ring-[#28a19f]"
                            value={input}
                            onChange={onChange} // فقط به تابع onChange اشاره کنید
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="پیام خود را بنویسید..."
                        />
                        <button onClick={handleSend} className="ml-2 bg-[#28a19f] text-white rounded-lg p-2 sm:p-3 hover:bg-[#24b0a2] transition">
                            ارسال
                        </button>
                    </div>
                    <div>
                            {errorMessage && (
                                 <div className="text-red-500 mt-2">{errorMessage}</div>
                            )}
                    </div>
                    <button title='بستن باته پشتیبان' className="mt-2 text-gray-500 hover:text-gray-700 transition" onClick={toggleChat}>
                        بستن
                    </button>
                </div>
            )}
                <button 
                    onClick={scrollToTop} 
                    className={`fixed z-40  right-24 bg-[#166c6b] text-white p-2 rounded-lg shadow-lg transition-all transform ${showScrollBtn ? ' bottom-6 ' : '  bottom-[-50px]'} `}>
                    ⬆️ برگرشت به بالا
                </button>
        </div>
    );
};

