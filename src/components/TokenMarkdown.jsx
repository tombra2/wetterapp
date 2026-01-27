import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";

const TokenMarkdown = ({content}) => {

    return (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
        </ReactMarkdown>
    )
}

export default TokenMarkdown;
