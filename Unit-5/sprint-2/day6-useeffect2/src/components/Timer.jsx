import { useEffect, useState } from "react"

export const Timer = () => {
    const [time, setTime] = useState(10);

    useEffect(() => {
      const id=  setInterval(() => {
        console.log("hello",time);
            setTime((prev) => {
                if (prev <= 1) {
                    clearInterval(id);
                    return 0;
                }
            return  prev - 1
            });
    },1000)
    },[])
    return (
        <div>Timer:{ time}</div>
    )
}