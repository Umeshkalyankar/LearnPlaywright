function getFirst<T>(items: T[]): T {
    return items[0]!;
}

const number = getFirst<number>([10, 20, 30]);

const name = getFirst<string>(["Umesh", "Ashish"]);