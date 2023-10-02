function generateMockData() {
    return [
        {
            name: "John Doe",
            email: "john@example.com",
            photoUrl: "https://example.com/john-photo.jpg",
        },
        {
            name: "Jane Smith",
            email: "jane@example.com",
            photoUrl: "https://example.com/jane-photo.jpg",
        },
        // Add more data here
    ];
}

// Function to populate the table with data
function populateTable() {
    const tableBody = document.getElementById("data-table");
    const mockData = generateMockData();

    mockData.forEach((item) => {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td><img src="${item.photoUrl}" alt="${item.name}'s Photo"></td>
            <td><button onclick="openTodoList()">Todo List</button></td>
            <td><button onclick="openAlbum()">Album</button></td>
        `;
        tableBody.appendChild(newRow);
    });
}
