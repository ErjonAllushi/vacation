export function Stats({ items }) {
  const numItem = items.length;
  const packedItem = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItem / numItem) * 100);
  return (
    <footer className="stats">
      <em>
        {numItem === 0
          ? `Start adding items to your list!✈`
          : percentage === 100
          ? `You are ready to flight✈`
          : `You have ${numItem} items on your list, and you have packed ${packedItem}(
        ${percentage}%)`}
      </em>
    </footer>
  );
}
