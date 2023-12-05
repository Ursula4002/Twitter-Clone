function NavigationIcons({content,urlIcon}) {

    return (
        <div>
            <img src={urlIcon} alt="" />
            {content}
        </div>
    )
}

export default NavigationIcons;