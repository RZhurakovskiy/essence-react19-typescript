import style from './Container.module.scss'
interface ContainerProps {
	children: React.ReactNode
}
export const Container: React.FC<ContainerProps> = ({ children }) => (
	<div className={style.container}>{children}</div>
)
