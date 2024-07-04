import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts"

export default function Analytics() {
    return (
        <section className="flex flex-col ">
            <div className="flex flex-row items-center justify-between">
                <span className="text-lg font-bold capitalize">sales analytics</span>
                <button className="p-1 text-sm text-blue-800 capitalize rounded-md bg-blue-800/10">switch to weekly</button>
            </div>
            <div className='h-[10rem] w-full mt-[4rem]' >
                <ResponsiveContainer width='100%' height='100%' >
                    <AreaChart
                        width={500}
                        height={500}
                        data={data}
                        margin={{
                            top: 10
                        }
                        }
                    >

                        <Tooltip cursor={false} />
                        <Area
                            animationBegin={800}
                            animationDuration={2000}
                            type='monotone'
                            dataKey={"data"}
                            stroke='#ffc187'
                            fill='#ffeaa7'
                            strokeWidth={2}
                        />

                    </AreaChart>
                </ResponsiveContainer>
            </div>

        </section>
    )
}





const data = [
    {
        data: 6780
    },
    {
        data: 6300
    },
    {
        data: 6000
    },
    {
        data: 5000
    },
    {
        data: 6780
    },
    {
        data: 5400
    },
    {
        data: 6000
    },
    {
        data: 8000
    },
    {
        data: 5100
    },
    {
        data: 5700
    },
    {
        data: 6900
    },
    {
        data: 7100
    },
    {
        data: 4500
    },
    {
        data: 6500
    },
]