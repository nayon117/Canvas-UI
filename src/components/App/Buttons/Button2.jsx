import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Button2 = () => {
    return (
        <CodeBox
            text={`Buttons with different HTML tags`}
            stringCode={`
            <a role="button" className="mx-2 px-4 py-2 border rounded-md">Link</a>
            <button type="submit" className="mx-2 px-4 py-2 border rounded-md">Button</button>
            <input type="button" value="Input" className="mx-2 px-4 py-2 border rounded-md" />
            <input type="submit" value="Submit" className="mx-2 px-4 py-2 border rounded-md" />
            <input type="radio" aria-label="Radio" className="mx-2 px-4 py-2 border rounded-md" />
            <input type="checkbox" aria-label="Checkbox" className="mx-2 px-4 py-2 border rounded-md" />
            <input type="reset" value="Reset" className="mx-2 px-4 py-2 border rounded-md" />`} >
            <div className="flex justify-center ">
            <a role="button" className="mx-2 px-4 py-2 border rounded-md">Link</a>
            <button type="submit" className="mx-2 px-4 py-2 border rounded-md">Button</button>
            <input type="button" value="Input" className="mx-2 px-4 py-2 border rounded-md" />
            <input type="submit" value="Submit" className="mx-2 px-4 py-2 border rounded-md" />
            <input type="radio" aria-label="Radio" className="mx-2 px-4 py-2 border rounded-md" />
            <input type="checkbox" aria-label="Checkbox" className="mx-2 px-4 py-2 border rounded-md" />
            <input type="reset" value="Reset" className="mx-2 px-4 py-2 border rounded-md" />
            </div>
        </CodeBox>
    )
}
export default Button2;