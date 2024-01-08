import { ArrowLeft, ArrowUpRight, Plus, PencilSimpleLine, Trash } from "phosphor-react-native";

export type IconProps = 'ArrowLeft' | 'ArrowUpRight' | 'Plus' | 'PencilSimpleLine' | 'Trash'

type Props = {
    name: IconProps;
    color?: string;
    size?: number;
}

export function Icon({ name, size = 16, color = '#000000' }: Props){
    function getIcon(name: IconProps){
        switch (name) {
            case 'ArrowLeft':
                return ArrowLeft;
            case 'ArrowUpRight':
                return ArrowUpRight;
            case 'PencilSimpleLine':
                return PencilSimpleLine;
            case 'Plus':
                return Plus;
            case 'Trash':
                return Trash;
        }
    }

    const IconComponent = getIcon(name);
    
    return <IconComponent size={size} color={color} />
}