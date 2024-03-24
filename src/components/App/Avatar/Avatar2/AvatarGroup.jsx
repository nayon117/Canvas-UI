const AvatarGroup = ({ count, imageUrl }) => {
    const renderAvatars = () => {
        const avatars = [];
        const maxAvatars = 5; // Maximum number of avatars to display without counting the counter
        
        for (let i = 0; i < Math.min(count, maxAvatars); i++) {
            avatars.push(
                <img
                    key={i}
                    className={`w-10 h-10 rounded-full border-2 border-white z-${maxAvatars - i}`}
                    src={imageUrl}
                    alt={`Avatar ${i + 1}`}
                    style={{ marginLeft: `${-i * 2}rem` }} // Adjust the spacing
                />
            );
        }
        
        return avatars;
    };

    return (
        <div className="flex justify-center items-center relative">
            {renderAvatars()}
            {count > 5 && (
                <div className="absolute top-0 left-1/2 bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center -ml-10">
                    +{count - 5}
                </div>
            )}
        </div>
    );
};

export default AvatarGroup;
