class Article {
    //da addna # kum dvata masiva

    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._likes = [];
        this._comments = [];
    }
    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        } else if (this._likes.length === 1) {
            return `${this._likes[0]} likes this article!`;
        } else {
            return `${this._likes[0]} and ${this._likes.length-1} others like this article!`;
        }
    }
    like(username) {
        let values = Object.values(this._likes);
        if (values.includes(username)) {
            throw new Error("You can't like the same article twice!");
        } else if (this.creator === username) {
            throw new Error("You can't like your own articles!");
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }
    dislike(username) {
        let values = Object.values(this._likes);
        if (!values.includes(username)) {
            throw new Error("You can't dislike this article!");
        }
        const index = this._likes.indexOf(username);
        if (index > -1) {
            this._likes.splice(index, 1);
        }
        return `${username} disliked ${this.title}`;
    }
    comment(username, content, id) {
        let counter = this._comments.length + 1;
        let currentKey = Number(id) - 1;
        let keys = Object.keys(this._comments)
        if (id === undefined || !keys.includes(currentKey.toString())) {
            let comment = {
                id: counter,
                username,
                content,
                Replies: []
            }
            this._comments.push(comment);
            return `${username} commented on ${this.title}`;
        }
        if (keys.includes(currentKey.toString())) {
            let currVal = this._comments.find(x => x.id == currentKey + 1);
            let repCounter = id + "." + (currVal["Replies"].length + 1);
            let reply = {
                id: repCounter,
                username,
                content
            }
            currVal["Replies"].push(reply);
            return `You replied successfully`;
        }
    }
    toString(sortingType) {
        if (sortingType === "asc") {
            this._comments.sort((a, b) => {
                return Number(a["id"]) - Number(b["id"]);
            })
            this._comments.map(x => {
                if (x["Replies"].length > 1) {
                    x["Replies"].sort((a, b) => {
                        return Number(a["id"]) - Number(b["id"]);
                    })
                }
            })
        } else if (sortingType === "desc") {
            this._comments.sort((a, b) => {
                return Number(b["id"]) - Number(a["id"]);
            })
            this._comments.map(x => {
                if (x["Replies"].length > 1) {
                    x["Replies"].sort((a, b) => {
                        return Number(b["id"]) - Number(a["id"]);
                    })
                }
            })
        } else if ("username") {
            this._comments.sort((a, b) => {
                return a["username"].localeCompare(b["username"]);
            })
            this._comments.map(x => {
                if (x["Replies"].length > 1) {
                    x["Replies"].sort((a, b) => {
                        return a["username"].localeCompare(b["username"]);
                    })
                }
            })
        }
        let acc;
        acc = `Title: ${this.title}\n` +
            `Creator: ${this.creator}\n` +
            `Likes: ${this._likes.length}\n` +
            `Comments:\n`;
        let a = this._comments.reduce((a, b) => {
            a += `-- ${b["id"]}. ${b["username"]}: ${b["content"]}\n`
            if (b["Replies"].length > 0) {
                a += b["Replies"].reduce((c, d) => {
                    return c += `--- ${d["id"]}. ${d["username"]}: ${d["content"]}\n`;
                }, '');
            }
            return a;
        }, '');
        acc += a;
        return acc.trim();
    }
}
let art = new Article("My Article", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));