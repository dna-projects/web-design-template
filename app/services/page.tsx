import LayeredImages from "../../components/LayeredImages"
import PrimaryButton from "../../components/buttons/PrimaryButton"
import ServiceCard from "../../components/ServiceCard"

import Link from "next/link"

export default function Services() {
    return (
        <>
            <main className="flex flex-col text-[#161616]">

                {/* Main service keyword component */}
                <div className="flex flex-col self-center max-w-screen-xl px-4 py-16 lg:pt-28 lg:pb-36">
                    <div className="flex flex-col-reverse gap-12 lg:flex-row lg:gap-16 xl:gap-24 2xl:px-0">
                        {/* Content */}
                        <div className="flex flex-col self-center max-w-[550px] lg:w-1/2 lg:max-w-none">
                            <div className="font-semibold tracking-wider">SEO RANKING</div>
                            <h2 className="text-[33px] font-extrabold mb-5 xl:text-[45px]">Main Service Keyword</h2>
                            <p className="text-neutral-600 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
                            <p className="text-neutral-600 mb-9">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.</p>
                            <div className="self-start">
                                <PrimaryButton href={"/contact"} label={"GET IN TOUCH"} />
                            </div>
                        </div>
                        {/* Image */}
                        <LayeredImages />
                    </div>
                </div>

                {/* Service cards */}
                <div className="flex flex-col self-center max-w-screen-xl gap-16 px-4 pb-16 lg:gap-36 lg:pb-36">
                    <ServiceCard
                        id={"service1"}
                        image={"/service-1-image.jpg"}
                        icon={"/service-1-icon.svg"}
                        title={"Service 1"}
                        content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.Sed nisi."}
                    />
                    <ServiceCard
                        id={"service2"}
                        image={"/service-2-image.jpg"}
                        icon={"/service-2-icon.svg"}
                        title={"Service 2"}
                        content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.Sed nisi."}
                    />
                    <ServiceCard
                        id={"service3"}
                        image={"/service-3-image.jpg"}
                        icon={"/service-3-icon.svg"}
                        title={"Service 3"}
                        content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.Sed nisi."}
                    />
                </div>
            </main>
        </>
    );
}
