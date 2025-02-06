import { cn } from "../../utils";

function BorderBg({className,...props}){

    return(
        <div {...props} className={cn("w-full h-36 bg-contain bg-repeat-x",className)}>
            
        </div>
    );

}

export default BorderBg;