fetch('http://test.api.weniv.co.kr/mall')
    .then(data => data.json())
    .then(data => {
        console.log(data);
        return data
    })
    .then(data => {
        data.forEach(i => {
            console.log(i.productName)
        });
        return data
    })
    .then(data => {
        console.log(data.filter(i => i.price >= 10000))
        return data
    })
    .then(data => {
       data.forEach (i => {
        const h2 = document.createElement('h2')
        const p = document.createElement('p')
        h2.innerText = i.productName
        p.innerText = i.price
        document.body.appendChild(h2)
        document.body.appendChild(p)
       })
    })
    .catch(메시지 => {
        alert('홈페이지가 정상적으로 작동하지 않고 있습니다. 조치중이오니 잠시만 기다려주시기 바랍니다.')
        console.log(메시지);
    })

// 1. 추가 then을 사용하여 7개의 항목 중 productName만 console.log에 출력해보세요.

// 2. 추가 then을 사용하여 7개의 항목 중 price가 10000원 이상 되는 product를 console.log에 출력하는 코드를 작성해주세요.

// 3. 추가 then을 사용하여 7개의 항목의 productName과 price를 각각 h2와 p 태그로 생성하여 DOM 화면에 출력해주세요.

// 4. error 처리를 해주세요.

fetch('http://test.api.weniv.co.kr/mall')
    .then(productData=>productData.json())
    .then(productData=>productData)
    .then(productData => {
        console.log(productData.map(item => item.productName));
        return productData;
    })
    .then(productData => {
        console.log(
                productData
                    .map(item => item.price)
                    .filter(item => item >= 10000)
            )
        return productData;
    })
    .then(productData => {
        const main = document.createElement("main");
        productData.forEach(item => {
            const ProductCard = document.createElement("article");
            const productName = document.createElement("h2");
            const productPrice = document.createElement("p");

            productName.textContent = `상품명 : ${item.productName}`;
            productPrice.textContent = `가격 : ${item.price}`;

            ProductCard.appendChild(productName);
            ProductCard.appendChild(productPrice);

            main.appendChild(ProductCard);
        })
        document.body.appendChild(main);
    })
    .catch(error => {
        alert('에러!')
        // error page로 리다이렉트
        console.log(error);
    })

// 5. 혹시 시간이 남으신 분들은 해당 코드를 뒤에서 배울 async, await으로 고쳐보세요!
async function getData(){
    const response = await fetch(`http://test.api.weniv.co.kr/mall`);
    const productData = await(response.json());
    console.log(productData);
    console.log(productData.map((item) => item.productName));
    console.log(productData.map((item) => item.price).filter((item) => item > 10000));

    const main = document.createElement("main");
    productData.forEach(item => {
        const ProductCard = document.createElement("article");
        const productName = document.createElement("h2");
        const productPrice = document.createElement("p");

        productName.textContent = `상품명 : ${item.productName}`;
        productPrice.textContent = `가격 : ${item.price}`;

        ProductCard.appendChild(productName);
        ProductCard.appendChild(productPrice);

        main.appendChild(ProductCard);
    })
    document.body.appendChild(main);
}

getData()
