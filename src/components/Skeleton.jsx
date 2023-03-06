export const Skeleton = ({ children, number = 1 }) => {
    const skeletonQuant = Array.from(Array(number).keys());
    return skeletonQuant.map((index) => (
        <div key={index} className="animate-pulse bg-slate-400 flex w-fit">
            {children}
        </div>
    ));
};
