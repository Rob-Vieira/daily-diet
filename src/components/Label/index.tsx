import { Title } from "./styles";

type Props = {
    title: string;
}

export function Label({ title }: Props){
    return (
        <Title>
            {title}
        </Title>
    )
}