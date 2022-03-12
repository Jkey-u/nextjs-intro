import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({params}) {
    const router = useRouter();
    const [title, id] = params || [];
    // console.log(router);
    return (
        <div>
            <Seo title={title}/>
            <h4>{title}</h4>
        </div>
    );
}

export async function getServerSideProps({params:{params}}) {
    // get URL info
    return {
        props: {
            params,
        }
    };
}