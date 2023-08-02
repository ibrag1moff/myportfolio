type SkillCardProps = {
    title: string;
};

export default function SkillCard({ title }: SkillCardProps) {
    return (
        <div className="uppercase border p-2 rounded-md text-[#fff700] font-semibold  border-[#fff700] ">
            {title}
        </div>
    );
}
