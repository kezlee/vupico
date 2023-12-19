const ContentHeader:React.FC<{ title:string }> = ({ title }) => (
  <h2 className='text-[35px] mb-8 relative before:absolute before:w-[19px] before:h-[2px] before:bg-[--secondary] before:bottom-0 after:absolute after:bg-[--secondary] after:w-[9px] after:h-[2px] after:left-[24px] after:bottom-0'>{title}</h2>
)

export default ContentHeader