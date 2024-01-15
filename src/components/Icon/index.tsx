import { ArrowLeft, ArrowUpRight, Plus, PencilSimpleLine, Trash } from "phosphor-react-native";

export type IconTypeProps = 'ArrowLeft' | 'ArrowUpRight' | 'Plus' | 'PencilSimpleLine' | 'Trash'

export type IconProps = {
    name: IconTypeProps;
    color?: string;
    size?: number;
}

export function Icon({ name, size = 16, color = '#000000' }: IconProps){
    function getIcon(name: IconTypeProps){
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
    
    return (<IconComponent size={size} color={color} />)
}