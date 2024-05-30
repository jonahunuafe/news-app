// our-domain/news

import Link from "next/link";
import { Fragment } from "react";

function NewsPage() {
    return (
        <Fragment>
            <h1>The NewsPage</h1>
            <ul>
                <li>
                    <Link href="/news/great-frame">
                        NextJs is a great framework
                    </Link>
                </li>
                <li>
                   Something else
                </li>
            </ul>
        </Fragment>
    )
}

export default NewsPage;