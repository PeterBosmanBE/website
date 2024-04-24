import React from 'react';
import Image from "next/image";

export default function Footer() {
        return (
            <React.Fragment>
                <footer>
                <div>
                    <div>
                        <div className="flex items-center justify-center pb-2">
                            <a className="pr-3" href="https://www.linkedin.com/in/peter-bosman0">
                                <Image
                                    src="/socialmedia/linkedin.png"
                                    alt="LinkedIn"
                                    width={40}
                                    height={40}
                                    priority
                                />
                            </a>
                            <a className="pr-3" href="https://github.com/PeterBosmanBE">
                                <Image
                                    src="/socialmedia/github.png"
                                    alt="GitHub"
                                    width={40}
                                    height={40}
                                    priority
                                />
                            </a>
                            <a rel="me" href="https://mastodon.social/@peterbosman">
                                <Image
                                    src="/socialmedia/mastodon.png"
                                    alt="Mastodon"
                                    width={40}
                                    height={40}
                                    priority
                                />
                            </a>
                        </div>
                    </div>
                </div>
                </footer>
            </React.Fragment>
        );
}
