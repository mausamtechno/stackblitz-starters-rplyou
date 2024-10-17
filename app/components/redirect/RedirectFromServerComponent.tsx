import { redirect } from "next/navigation";
import { Button } from "../common/Button";

const RedirectFromServerComponent = () => {
    if (true) {
        redirect("/dashboard")
    }
    // if (true) {
    //     redirect("https://github.com/mausamtechno/stackblitz-starters-rplyou")
    // }
    const onClick = () => {
        
    }
    return <div>
        <Button>Click me</Button>
    </div>
};

export default RedirectFromServerComponent