#include <bits/stdc++.h>
using namespace std;

class Book
{
public:
    int id;
    string Title;
    string Author;
    bool issued;

    Book(int id = 0, string Title = "", string Author = "", bool issued = false)
    {
        this->id = id;
        this->Title = Title;
        this->Author = Author;
        this->issued = issued;
    }

    void display() const
    {
        cout << "ID : " << id << " | Title " << Title << " | Author " << Author << " | Status : " << (issued ? "Not Available" : "Available") << endl;
    }
};

class Library
{
    map<int, Book> books;
    string filename = "library.txt";

public:
    Library()
    {
        loadfromfile();
    }

    void addbook()
    {
        int id;
        string title, author;
        cout << "Enter BookID: ";
        cin >> id;
        cin.ignore();
        cout << "Enter Title : ";
        getline(cin, author);
        cout << "Enter Author : ";
        getline(cin, author);

        if (books.find(id) != books.end())
        {
            cout << "Book already exits";
            return;
        }
        books[id] = Book(id, title, author, false);
        cout << "Book added successfully.\n";
        saveToFile();
    }

    void displaybooks()
    {
        if (books.empty())
        {
            cout << "No Books Available ";
            return;
        }
        for (auto &b : books)
        {
            b.second.display();
        }
    }

    void searchBook()
    {
        int id;
        cout << "Enter BookID : ";
        cin >> id;
        if (books.find(id) != books.end())
        {
            books[id].display();
            return;
        }
        cout << "Book not found ";
    }

    void issuebook()
    {
        int id;
        cout << "Enter BookID : ";
        cin >> id;
        if (books.find(id) != books.end())
        {
            if (books[id].issued)
            {
                cout << "Book is Not available ";
            }
            else
            {
                books[id].issued = true;
                cout << "Book is isssued ";
                saveToFile();
            }
        }
        else
        {
            cout << "Book is not found ";
        }
    }

    void returnbook()
    {
        int id;
        cout << "Enter BookID : ";
        cin >> id;
        if (books.find(id) != books.end())
        {
            if (!books[id].issued)
            {
                cout << "Book is not issued";
            }
            else
            {
                books[id].issued = false;
                cout << "Book returned successfullly";
                saveToFile();
            }
        }
        else
        {
            cout << "Book is not found ";
        }
    }

    void deletebook()
    {
        int id;
        cout << "Enter BookID : ";
        cin >> id;
        if (books.erase(id))
        {
            cout << "Book deleted successfully.\n";
            saveToFile();
        }
        else
        {
            cout << "Book not found!\n";
        }
    }

private:
    void loadfromfile()
    {
        ifstream fin(filename);
        if (!fin.is_open())
            return;

        string line;
        while (getline(fin, line))
        {
            stringstream ss(line);
            string idStr, title, author, issuedStr;
            getline(ss, idStr, '|');
            getline(ss, title, '|');
            getline(ss, author, '|');
            getline(ss, issuedStr, '|');

            int id = stoi(idStr);
            bool issued = (issuedStr == "1");
            books[id] = Book(id, title, author, issued);
        }
        fin.close();
    }

    void saveToFile()
    {
        ofstream fout(filename);
        for (auto &b : books)
        {
            fout << b.second.id << "|" << b.second.Title << "|"
                 << b.second.Author << "|" << b.second.issued << "\n";
        }
        fout.close();
    }
};
int main()
{
    Library lb;

    int choice;
    do
    {
        cout << "=============== Welcome to Library =============" << endl;
        cout << "1. Add Book" << endl;
        cout << "2. Delete Book" << endl;
        cout << "3. Search Book" << endl;
        cout << "4. Display Book" << endl;
        cout << "5. Issue Book" << endl;
        cout << "6. Return Book" << endl;
        cout << "0. Exit" << endl;
        cout << "Enter the Choice : ";
        cin >> choice;

        switch (choice)
        {
        case 1:
            lb.addbook();
            break;
        case 2:
            lb.deletebook();
            break;
        case 3:
            lb.searchBook();
            break;
        case 4:
            lb.displaybooks();
            break;
        case 5:
            lb.issuebook();
            break;
        case 6:
            lb.returnbook();
            break;
        case 0:
            "Exit";
        default:
            cout << "Invalid choice !!";
        }
    } while (choice != 0);

    return 0;
}