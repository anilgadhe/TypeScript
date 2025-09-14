function FetchData(data) {
    return data;
}
console.log(FetchData(FetchData(20)));
console.log(FetchData(FetchData("A")));
console.log(FetchData(FetchData(["A", "B", "C", "D"])));
console.log(FetchData(FetchData({ Name: "Anil", Price: 2000 })));
console.log(FetchData(FetchData([{ Name: "Anil", Price: 2000 }, { Name: "Ganesh", Price: 3000 }])));
