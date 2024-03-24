import CodeBox from '../../../Shared/CodeBox/CodeBox';

const Avatar3 = () => {
    const count = 7;
    const avatars = Array.from({ length: count }, (_, index) => index + 1);

    return (
        <CodeBox
            text={"Avatar group "}
            stringCode={`
        const count = 7;
        const avatars = Array.from({ length: count }, (_, index) => index + 1);
        return (
            <div className="flex justify-center -space-x-6 rtl:space-x-reverse">
                {avatars.map((index) => (
                    <div key={index} className="w-12">
                        <img className="rounded-full" src="https://i.ibb.co/XXGgLLm/77a2642b-2e0b-481f-8e0c-6062e81791ed.jpg" alt={"Avatar " + index} />
                    </div>
                ))}
            </div>
            )
        `}>
            <div className="flex justify-center -space-x-6 rtl:space-x-reverse">
                {avatars.map((index) => (
                    <div key={index} className="w-12">
                        <img className="rounded-full" src="https://i.ibb.co/XXGgLLm/77a2642b-2e0b-481f-8e0c-6062e81791ed.jpg" alt={"Avatar " + index} />
                    </div>
                ))}
            </div>
        </CodeBox>
    );
};

export default Avatar3;
