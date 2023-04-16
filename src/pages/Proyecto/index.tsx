import { Skeleton } from "baseui/skeleton"
import { Fragment } from "react"
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import styles from "./Proyecto.module.sass"

const Loading = () => {
    return (
        <Fragment>
            <div className={styles.header}>
                <h1>
                    <Skeleton
                        height="28px"
                        width="200px"
                        animation
                    />
                    {/* Liga Fair Play */}
                </h1>
                <h2>
                    <Skeleton
                        height="18px"
                        width="150px"
                        animation
                    />
                    {/* Frontend - Backend */}
                </h2>
            </div>
            <section>
                <h2>
                    <Skeleton
                        height="16px"
                        width="100px"
                        animation
                    />
                </h2>
                <Skeleton
                    height="100px"
                    width="100%"
                    animation
                />
            </section>
        </Fragment>
    )
}

const Proyecto = () => {
    return (
        <Fragment>
            <Nav ready={false} />
            <main className={styles.root}>
                <Banner isLoading background="https://images.unsplash.com/photo-1579200632488-946d99f75c3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80" />
                <article className={styles.content}>
                    <Loading />
                </article>
            </main>
        </Fragment>
    )
}

export default Proyecto;