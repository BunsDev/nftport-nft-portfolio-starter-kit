import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    const creatorName = process.env.NEXT_PUBLIC_CREATOR_NAME
    const creatorWebsite = process.env.NEXT_PUBLIC_CREATOR_WEBSITE
    const creatorProjectName = process.env.NEXT_PUBLIC_CREATOR_PROJECT_NAME
    const creatorProjectTagline = process.env.NEXT_PUBLIC_CREATOR_PROJECT_TAGLINE
    const creatorProjectBio = process.env.NEXT_PUBLIC_CREATOR_PROJECT_BIO
    const creatorProjectLearnMore = process.env.NEXT_PUBLIC_CREATOR_LEARN_MORE_LINK
    const creatorProjectInstagram = process.env.NEXT_PUBLIC_CREATOR_INSTAGRAM_LINK
    const creatorProjectTwitter = process.env.NEXT_PUBLIC_CREATOR_TWITTER_LINK

    return (
        <header className="bg-slate-50 lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-[28rem] lg:items-start lg:overflow-y-auto xl:w-[30rem]">
            <div className="hidden lg:sticky lg:top-0 lg:flex lg:w-16 lg:flex-none lg:items-center lg:whitespace-nowrap lg:py-12 lg:text-sm lg:leading-7 lg:[writing-mode:vertical-rl]">
                <span className="font-mono text-slate-500">
                    Created by
                </span>
                <span className="mt-6 flex gap-6 font-bold text-slate-900">
                    {creatorName}
                    <span aria-hidden="true" className="text-slate-400">
                        /
                    </span>
                    {creatorWebsite}
                </span>
            </div>
            <div class="relative z-10 mx-auto px-4 pb-4 pt-10 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:border-slate-200 lg:py-12 lg:px-8 xl:px-12">
                <div class="relative mx-auto block w-48 overflow-hidden rounded-lg bg-slate-200 shadow-xl shadow-slate-200 sm:w-64 sm:rounded-xl lg:w-auto lg:rounded-2xl">
                    <img alt={creatorProjectName} src="/logo.png" class="w-full"
                    />
                    <div class="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 sm:rounded-xl lg:rounded-2xl">
                    </div>
                </div>
                <div class="mt-10 text-center lg:mt-12 lg:text-left">
                    <p class="text-xl font-bold text-slate-900">
                        {creatorProjectName}
                    </p>
                    <p class="mt-3 text-lg font-medium leading-7 text-slate-700">
                        {creatorProjectTagline}
                    </p>
                </div>
                <section class="mt-12 hidden lg:block">
                    <h2 class="flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
                        <svg aria-hidden="true" viewBox="0 0 10 10" class="h-2.5 w-2.5">
                            <path d="M0 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Z" class="fill-slate-200">
                            </path>
                            <path d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z" class="fill-slate-300">
                            </path>
                        </svg>
                        <span class="ml-2.5">
                            About
                        </span>
                    </h2>
                    <p class="mt-2 text-base leading-7 text-slate-700 lg:line-clamp-4">
                        {creatorProjectBio}
                    </p>
                    <a href={creatorProjectLearnMore} target="_blank" rel="noreferrer" class="mt-2 hidden text-sm font-bold leading-6 lg:inline-block">
                        Learn More
                    </a>
                </section>
                <section class="mt-10 lg:mt-12">
                    <h2 class="sr-only flex items-center font-mono text-sm font-medium leading-7 text-slate-900 lg:not-sr-only">
                        <svg aria-hidden="true" viewBox="0 0 10 10" class="h-2.5 w-2.5">
                            <path d="M0 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Z" class="fill-slate-200">
                            </path>
                            <path d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z" class="fill-slate-300">
                            </path>
                        </svg>
                        <span class="ml-2.5">
                            Social
                        </span>
                    </h2>
                    <div class="h-px bg-gradient-to-r from-slate-200/0 via-slate-200 to-slate-200/0 lg:hidden"></div>
                    <ul role="list" class="mt-4 flex justify-center gap-10 text-base font-medium leading-7 text-slate-700 sm:gap-8 lg:flex-col lg:gap-4">
                        <li class="flex">
                            <a class="group flex items-center" aria-label="Instagram" href={creatorProjectInstagram} target="_blank" rel="noreferrer">
                                <svg aria-hidden="true" viewBox="0 0 32 32" class="h-5 w-5 fill-slate-400 group-hover:fill-slate-600">
                                    <path d="M16.0094 2.88294C20.2869 2.88294 20.7934 2.9017 22.4757 2.97674C24.0391 3.04553 24.8833 3.30819 25.4462 3.52707C26.1903 3.81474 26.7282 4.16494 27.2847 4.72152C27.8476 5.28435 28.1915 5.81591 28.4792 6.56009C28.6981 7.12292 28.9607 7.97342 29.0295 9.53058C29.1046 11.2191 29.1233 11.7256 29.1233 15.9969C29.1233 20.2744 29.1046 20.7809 29.0295 22.4632C28.9607 24.0266 28.6981 24.8708 28.4792 25.4337C28.1915 26.1778 27.8413 26.7157 27.2847 27.2722C26.7219 27.8351 26.1903 28.179 25.4462 28.4667C24.8833 28.6856 24.0328 28.9482 22.4757 29.017C20.7872 29.092 20.2806 29.1108 16.0094 29.1108C11.7319 29.1108 11.2253 29.092 9.54309 29.017C7.97968 28.9482 7.13543 28.6856 6.5726 28.4667C5.82841 28.179 5.2906 27.8288 4.73402 27.2722C4.17119 26.7094 3.82724 26.1778 3.53957 25.4337C3.3207 24.8708 3.05804 24.0203 2.98925 22.4632C2.91421 20.7747 2.89545 20.2681 2.89545 15.9969C2.89545 11.7194 2.91421 11.2128 2.98925 9.53058C3.05804 7.96717 3.3207 7.12292 3.53957 6.56009C3.82724 5.81591 4.17745 5.27809 4.73402 4.72152C5.29685 4.15869 5.82841 3.81474 6.5726 3.52707C7.13543 3.30819 7.98593 3.04553 9.54309 2.97674C11.2253 2.9017 11.7319 2.88294 16.0094 2.88294ZM16.0094 0C11.6631 0 11.119 0.018761 9.41176 0.093805C7.71077 0.168849 6.54133 0.44401 5.52824 0.837991C4.47137 1.25073 3.5771 1.7948 2.68908 2.68908C1.7948 3.5771 1.25073 4.47137 0.837991 5.52199C0.44401 6.54133 0.168849 7.70451 0.093805 9.40551C0.018761 11.119 0 11.6631 0 16.0094C0 20.3557 0.018761 20.8997 0.093805 22.607C0.168849 24.308 0.44401 25.4774 0.837991 26.4905C1.25073 27.5474 1.7948 28.4417 2.68908 29.3297C3.5771 30.2177 4.47137 30.768 5.52199 31.1745C6.54133 31.5685 7.70451 31.8437 9.40551 31.9187C11.1128 31.9937 11.6568 32.0125 16.0031 32.0125C20.3494 32.0125 20.8935 31.9937 22.6007 31.9187C24.3017 31.8437 25.4712 31.5685 26.4843 31.1745C27.5349 30.768 28.4292 30.2177 29.3172 29.3297C30.2052 28.4417 30.7555 27.5474 31.162 26.4968C31.556 25.4774 31.8312 24.3142 31.9062 22.6133C31.9812 20.906 32 20.3619 32 16.0156C32 11.6693 31.9812 11.1253 31.9062 9.41802C31.8312 7.71702 31.556 6.54759 31.162 5.53449C30.768 4.47137 30.224 3.5771 29.3297 2.68908C28.4417 1.80106 27.5474 1.25073 26.4968 0.844245C25.4774 0.450264 24.3142 0.175103 22.6132 0.100059C20.8997 0.018761 20.3557 0 16.0094 0Z" />
                                    <path d="M16.0094 7.78581C11.4692 7.78581 7.78581 11.4692 7.78581 16.0094C7.78581 20.5495 11.4692 24.2329 16.0094 24.2329C20.5495 24.2329 24.2329 20.5495 24.2329 16.0094C24.2329 11.4692 20.5495 7.78581 16.0094 7.78581ZM16.0094 21.3438C13.0639 21.3438 10.675 18.9549 10.675 16.0094C10.675 13.0639 13.0639 10.675 16.0094 10.675C18.9549 10.675 21.3438 13.0639 21.3438 16.0094C21.3438 18.9549 18.9549 21.3438 16.0094 21.3438Z" />
                                    <path d="M26.478 7.46056C26.478 8.52369 25.615 9.38044 24.5581 9.38044C23.495 9.38044 22.6383 8.51743 22.6383 7.46056C22.6383 6.39744 23.5013 5.54069 24.5581 5.54069C25.615 5.54069 26.478 6.40369 26.478 7.46056Z" />
                                </svg>

                                <span class="hidden sm:ml-3 sm:block">
                                    Instagram
                                </span>
                            </a>
                        </li>
                        <li class="flex">
                            <a class="group flex items-center" aria-label="Twitter" href={creatorProjectTwitter} target="_blank" rel="noreferrer">
                                <svg aria-hidden="true" viewBox="0 0 40 32" class="h-5 w-5 fill-slate-400 group-hover:fill-slate-600">
                                    <path d="M12.3895 32C27.2475 32 35.3764 19.6874 35.3764 9.01315C35.3764 8.66701 35.3687 8.31318 35.3533 7.96704C36.9346 6.82345 38.2993 5.40696 39.3832 3.78412C37.9104 4.43936 36.3468 4.86729 34.7456 5.0533C36.4315 4.04275 37.6938 2.45522 38.2986 0.585003C36.7126 1.52493 34.9781 2.18797 33.1695 2.5457C31.951 1.2509 30.3398 0.393583 28.5851 0.106307C26.8304 -0.180969 25.03 0.117793 23.4621 0.956402C21.8942 1.79501 20.6463 3.12676 19.9112 4.74574C19.1761 6.36473 18.9949 8.18078 19.3954 9.91312C16.184 9.75197 13.0423 8.91772 10.174 7.46447C7.30562 6.01122 4.7747 3.97141 2.74528 1.47728C1.71382 3.25564 1.3982 5.36001 1.86255 7.36272C2.3269 9.36543 3.53638 11.1162 5.24519 12.2592C3.96232 12.2185 2.70755 11.8731 1.58456 11.2515V11.3515C1.58341 13.2178 2.22859 15.0268 3.41043 16.4712C4.59228 17.9155 6.23784 18.906 8.06739 19.2743C6.87902 19.5995 5.63176 19.6468 4.42214 19.4128C4.93841 21.0178 5.94288 22.4215 7.29535 23.4282C8.64783 24.4348 10.2808 24.9941 11.9665 25.0279C9.10477 27.2759 5.56972 28.4951 1.9307 28.4894C1.28535 28.4884 0.640631 28.4488 0 28.3709C3.69686 30.7426 7.99729 32.0023 12.3895 32Z" />
                                </svg>
                                <span class="hidden sm:ml-3 sm:block">
                                    Twitter
                                </span>
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
        </header>
    )
}