export async function updateCart(
  userId,
  productId,
  quantity,
  FILTER_URL,
  CART_URL
) {
  try {
    const response = await fetch(FILTER_URL);
    if (!response.ok) throw new Error('CART API 요청이 실패했습니다.');

    const data = await response.json();
    if (data.items.length > 0) {
      const cartId = data.items[0].id;
      const patchResponse = await fetch(`${CART_URL}/${cartId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          productId,
          quantity: data.items[0].quantity + quantity,
        }),
      });

      if (!patchResponse.ok) throw new Error('Patch API 요청이 실패했습니다.');
      const patchData = await patchResponse.json();
      console.log(`장바구니에 상품을 ${quantity}개 추가로 담았습니다.`);
    } else {
      const postResponse = await fetch(CART_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          productId,
          quantity,
        }),
      });
      if (!postResponse.ok) throw new Error('POST API 요청이 실패했습니다.');
      const postData = await postResponse.json();
      console.log(`장바구니에 상품을 ${postData.quantity}개 담았습니다.`);
    }
  } catch (error) {
    console.error(error);
  }
}
