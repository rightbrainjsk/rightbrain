import styles from './Footer.module.scss'

function Footer() {
    return (
        <>
            <hr />
            <footer className={styles.test}>
                Copyright © <a href="https://www.rightbrain.co.kr/" target="_blank" >RightBrain</a> 가치 UX 그룹 퍼블리싱팀. All Rights Reserved.
            </footer>
        </>
    )
}

export default Footer
