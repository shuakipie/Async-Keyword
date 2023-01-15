// import requests

// async def get_data():
//     response = await requests.get('https://jsonplaceholder.typicode.com/todos/1')
//     data = response.json()
//     return data

//     // import aiofiles

// async def read_file(file_path):
//     async with aiofiles.open(file_path, mode='r') as f:
//         data = await f.read()
//     return data

// async def write_file(file_path, data):
//     async with aiofiles.open(file_path, mode='w') as f:
//         await f.write(data)

//         // import asyncpg

// async def get_user(user_id):
//     conn = await asyncpg.connect(user='user', password='password',
//                                 host='host', port='port', database='dbname')
//     result = await conn.fetchrow('SELECT * FROM users WHERE id = $1', user_id)
//     await conn.close()
//     return result

// async def update_user(user_id, name):
//     conn = await asyncpg.connect(user='user', password='password',
//                                 host='host', port='port', database='dbname')
//     await conn.execute('UPDATE users SET name = $1 WHERE id = $2', name, user_id)
//     await conn.close()

//     // import asyncio

// async def handle_client(reader, writer):
//     data = await reader.read(1024)
//     message = data.decode()
//     addr = writer.get_extra_info('peername')
//     print(f'Received message from {addr}: {message}')
//     writer.close()

// async def start_server():
//     server = await asyncio.start_server(handle_client, '127.0.0.1', 8888)
//     await server.serve_forever()


//     import aiohttp
// import asyncio
// from bs4 import BeautifulSoup

// async def fetch(session, url):
//     async with session.get(url) as response:
//         return await response.text()

// async def get_title(url):
//     async with aiohttp.ClientSession() as session:
//         html = await fetch(session, url)
//         soup = BeautifulSoup(html, 'html.parser')
//         title = soup.title.string
//         return title

// async def main():
//     urls = ['https://example1.com', 'https://example2.com', 'https://example3.com']
//     tasks = [get_title(url) for url in urls]
//     results = await asyncio.gather(*tasks)
//     for result in results:
//         print(result)


async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    return data;
}

async function getData() {
    const response1 = fetch('https://jsonplaceholder.typicode.com/todos/1');
    const response2 = fetch('https://jsonplaceholder.typicode.com/todos/2');
    const response3 = fetch('https://jsonplaceholder.typicode.com/todos/3');
    const data = await Promise.all([response1, response2, response3]);
    return data;
}


async function fetchAndPrintData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    for await (const item of data) {
        console.log(item);
    }
}


async function* getData() {
    let i = 0;
    while (i < 5) {
        yield i++;
    }
}

(async () => {
    for await (const item of getData()) {
        console.log(item);
    }
})();
