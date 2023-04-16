import styles from "./Banner.module.sass"
import styled, { css } from "styled-components";
import { Skeleton } from "baseui/skeleton"
import type { Banner } from "./Banner.types";
import useBanner from "./useBanner";

const Root = styled.div<Banner.StyledComponentProps>`
    ${(props) => props.background && css`
        background-image: url(${props.background});
        background-size: cover;
        background-position: center;
    `}
`

const Banner = (props: Banner.Props) => {
    const passedBanner = props.background;
    const { isLoading } = props;
    const background = useBanner(passedBanner, isLoading);
    return (
        <Root background={background} className={styles.root}>
             {background === null && <Skeleton height="100%" width="100%" animation />}
        </Root>
    )
}

export default Banner;