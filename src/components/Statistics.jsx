import { useState,useEffect } from "react";
import { AiFillTag, AiFillExperiment, AiFillDollarCircle, AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai"


export default function Statistics() {
    
    // state to store visisted domains
    const [visitedDomains, setVisitedDomains] = useState([]);
    // Function to add visited domain to the list
    const addVisitedDomain = (domain) => {
        setVisitedDomains(prevDomains => [...prevDomains, domain]);
    }

    useEffect(() => {
        // Your code to fetch visited domains from storage on component mount
        const storedDomains = localStorage.getItem('visitedDomains');
        if (storedDomains) {
            setVisitedDomains(JSON.parse(storedDomains));
        }

        // Your code to listen for new domain visits and add them to the list
        const handleNewDomainVisit = (event) => {
            const domain = event.target.location.hostname;
            addVisitedDomain(domain);
        }

        window.addEventListener('beforeunload', handleNewDomainVisit);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('beforeunload', handleNewDomainVisit);
        }
    }, []);

    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            <div className="flex flex-col  gap-2 p-4 rounded-lg bg-blue-300/50 hover:scale-[110%] transition">
                <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
                    <div className="p-4 bg-white border border-black rounded-lg border-1 w-fit">
                        <AiFillTag />
                    </div>
                    <div className="text-xs font-semibold">{visitedDomains}</div>
                </div>
                <div className="flex flex-col items-center justify-evenly md:flex-row">
                    <span className="text-sm font-semibold text-gray-500 capitalize">Daily visits</span>
                    <span className="text-green-600">+18%</span>
                    <AiOutlineArrowUp className="text-green-600" />
                </div>
            </div>
            <div className="flex flex-col  gap-2 p-4 rounded-lg bg-red-300/50 hover:scale-[110%] transition">
                <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
                    <div className="p-4 bg-white border border-black rounded-lg border-1 w-fit">
                        <AiFillExperiment />
                    </div>
                    <div className="text-xs font-semibold">10</div>
                </div>
                <div className="flex flex-col items-center justify-evenly md:flex-row">
                    <span className="text-sm font-semibold text-gray-500 capitalize">Weekly Visits</span>
                    <span className="text-red-600">-9%</span>
                    <AiOutlineArrowDown className="text-red-600" />
                </div>
            </div>
            <div className="flex flex-col  gap-2 p-4 rounded-lg bg-orange-200/50 hover:scale-[110%] transition">
                <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
                    <div className="p-4 bg-white border border-black rounded-lg border-1 w-fit">
                        <AiFillDollarCircle />
                    </div>
                    <div className="text-xs font-semibold">20</div>
                </div>
                <div className="flex flex-col items-center justify-evenly md:flex-row">
                    <span className="text-sm font-semibold text-gray-500 capitalize">Monthly Visits</span>
                    <span className="text-green-600">+24%</span>
                    <AiOutlineArrowUp className="text-green-600" />
                </div>
            </div>

        </section>
    )
}
