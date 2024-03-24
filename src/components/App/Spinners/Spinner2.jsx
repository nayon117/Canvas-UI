import CodeBox from "../../../Shared/CodeBox/CodeBox";
import { FaRegCircle } from "react-icons/fa6";


const Spinner2 = () => {
    return (
        <>
            <CodeBox
                text={`Ring Loader`}
                stringCode={`<p className="animate-ping text-3xl">
                        <FaRegCircle style={{ animation: 'ping-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
                    </p >
                    <p className="animate-ping text-2xl"><FaRegCircle /></p >
                    <p className="animate-ping text-xl"><FaRegCircle /></p >
                    <p className="animate-ping text-lg"><FaRegCircle /></p >`}>
                <div className="flex justify-center gap-10">

                    <p className="animate-ping text-3xl">
                        <FaRegCircle style={{ animation: 'ping-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
                    </p >
                    <p className="animate-ping text-2xl"><FaRegCircle /></p >
                    <p className="animate-ping text-xl"><FaRegCircle /></p >
                    <p className="animate-ping text-lg"><FaRegCircle /></p >

                </div>
            </CodeBox>
        </>
    );
};

export default Spinner2;