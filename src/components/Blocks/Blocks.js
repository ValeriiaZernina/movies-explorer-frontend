import "./Blocks.css";

function Blocks({
  name,
  blocksStyle,
  blocksSize,
  titleStyle,
  itemStyle,
  children,
}) {
  return (
    <section className={`blocks blocks_style_${blocksStyle}`}>
      <h2 className={`blocks__title blocks__title_style_${titleStyle} `}>
        {name}
      </h2>
      <div className={`blocks__item blocks__item_style_${itemStyle} `}>
        {children}
      </div>
    </section>
  );
}

export default Blocks;
