
export const Button = ({label,iconURL}) => {
    return (
        <section>
        <button className = 'mt-5 flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none border-coral-red bg-coral-red rounded-corner rounded-full hover:bg-black hover:text-white'>
            {label} 
            <img src = {iconURL} className = 'ml-2 rounded-full w-5 h-5' />
        </button>
        <div className="flex justify-start items-start w-full flex-wrap mt-20 gap-16">
            
        </div>
        </section>
    )
}
