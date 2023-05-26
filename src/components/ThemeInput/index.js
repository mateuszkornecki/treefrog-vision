function ThemeInput({theme, onThemeChange,positionNumber}) {
    return <input
        key={theme.pointer}
        value={theme.pointer}
        type="radio"
        name="theme"
        defaultChecked={positionNumber===0}
        style={{
            background: `linear-gradient( 90deg, ${theme.pointer} 50%, ${theme.background} 50% )`,
        }}
        className={`radioButton`}
        onChange={e=>onThemeChange(e)}
    />
}
export default ThemeInput;