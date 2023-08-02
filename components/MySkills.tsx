"use client";
// progress bar
import ProgressBar from "@ramonak/react-progress-bar";

export default function MySkills() {
    return (
        <div className="flex flex-col items-center">
            <h3 className="uppercase mb-8 text-[#fff700] text-2xl font-semibold">
                my skills
            </h3>
            <div className="flex flex-col gap-4">
                <div>
                    <span>HTML</span>
                    <ProgressBar
                        completed={98}
                        className="w-[250px] sm:w-[350px]"
                        labelColor="#000"
                        borderRadius="100px"
                        bgColor="#fff700"
                        animateOnRender={true}
                        transitionDuration="3s"
                    />
                </div>
                <div>
                    <span>CSS</span>
                    <ProgressBar
                        completed={93}
                        className="w-[250px] sm:w-[350px]"
                        labelColor="#000"
                        borderRadius="100px"
                        bgColor="#fff700"
                        animateOnRender={true}
                        transitionDuration="3s"
                    />
                </div>
                <div>
                    <span>JavaScript</span>
                    <ProgressBar
                        completed={86}
                        className="w-[250px] sm:w-[350px]"
                        labelColor="#000"
                        borderRadius="100px"
                        bgColor="#fff700"
                        animateOnRender={true}
                        transitionDuration="3s"
                    />
                </div>
                <div>
                    <span>React</span>
                    <ProgressBar
                        completed={76}
                        className="w-[250px] sm:w-[350px]"
                        labelColor="#000"
                        borderRadius="100px"
                        bgColor="#fff700"
                        animateOnRender={true}
                        transitionDuration="3s"
                    />
                </div>
            </div>
        </div>
    );
}
