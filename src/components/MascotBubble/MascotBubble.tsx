import React from "react";

type MascotBubbleProps = {
  message: string;
};

export const MascotBubble: React.FC<MascotBubbleProps> = ({ message }) => {
  return (
    <div className="flex items-start gap-3 w-full max-w-sm mx-auto mb-8 animate-bounce-slow">
      <div className="relative bg-white  px-5 py-3 rounded-2xl shadow-lg border border-blue-400/10 flex-1">
        <p className="text-sm font-semibold text-slate-700">{message}</p>
        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white  rotate-45 border-b border-r border-blue-400/10"></div>
      </div>
      <div className="size-16 rounded-full bg-blue-400/20 flex items-center justify-center overflow-hidden border-2 border-white  shadow-md shrink-0">
        <img
          alt="Friendly owl mascot"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC81GGv0azlzLbr3TgXwZz176ORSvuaDae4QCAiQM57SmdPIextx9lLm-ZJf8A7Ohibt8wzCzB-zIXrvmUaAIWBqaYK6HQaNBjYWfHdSOuL-HgxmyjE_P_4yhIjyn-3neMLBxj7Dit_JW5f1ymGvZ3uUS8bMUYfZlqMoxoNeeF9EY7hQxA1CteQ5O5Ahl1adaFweU6pDI3SfxKTd32dt297Tum8jyYbt2FnmhA8sfQtKaI_VuIJzBhRp7hIzW3K5oLvLZH8HYtQIy0"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
