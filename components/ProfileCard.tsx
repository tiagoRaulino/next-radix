import React from 'react';
import { useRouter } from 'next/navigation';

interface ProfileDataProps {
    name: string;
    userId: number;
    number: string;
}

const ProfileCard: React.FC<ProfileDataProps> = ({ name, userId, number }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/profile/${userId}`);
    };

    return (
        <div
            key={userId}
            className="max-w-lg p-4 bg-zinc-900 border border-[#3B3D41] rounded-lg cursor-pointer"
            onClick={handleClick}
        >
            <div className="flex items-center gap-4">
                <img
                    src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                    alt={name}
                    className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                    <div className="text-lg font-bold mb-1">{name}</div>
                    <div className="text-sm text-zinc-300">Matrícula: {userId}</div>
                    <div className="text-sm text-zinc-300">Número: {number}</div>
                </div>
                <div className="ml-auto">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Aluno
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
