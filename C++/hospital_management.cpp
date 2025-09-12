#include <bits/stdc++.h>
using namespace std;

class Patient
{
public:
    int patient_no;
    int age;
    string name;
    string address;
    int sevearity;

    Patient(int patient_no = 0, int age = 0, string name = "", string address = "", int sevearity = 0)
    {
        this->patient_no = patient_no;
        this->age = age;
        this->name = name;
        this->address = address;
        this->sevearity = sevearity;
    }

    void display() const
    {
        cout << "patient_no : " << patient_no
             << " | Age : " << age
             << " | Name : " << name
             << " | Address : " << address
             << " | Sevearity : " << sevearity << endl;
    }
};


struct CompareSeverity
{
    bool operator()(const Patient &a, const Patient &b) const
    {
        return a.sevearity < b.sevearity; 
    }
};

class Hospital
{
    map<int, Patient> patients;
    priority_queue<Patient, vector<Patient>, CompareSeverity> pq;
    string filename = "patientinfo.txt";

public:
    Hospital()
    {
        loadfromfile();
    }

    void add_patient()
    {
        int id;
        cout << "Enter Patient ID : ";
        cin >> id;
        cin.ignore();

        int age, sevearity;
        string name, address;

        cout << "Enter Patient Name : ";
        getline(cin, name);
        cout << "Enter Patient Age : ";
        cin >> age;
        cin.ignore();
        cout << "Enter Address : ";
        getline(cin, address);
        cout << "Enter Sevearity : ";
        cin >> sevearity;

        if (patients.find(id) != patients.end())
        {
            cout << "Patient Already exists!\n";
        }
        else
        {
            cout << "Patient added!\n";
            patients[id] = Patient(id, age, name, address, sevearity);
            pq.push(patients[id]);
            savetofile();
        }
    }

    void serve_patient()
    {
        if (pq.empty())
        {
            cout << "No patients!\n";
            return;
        }
        Patient p = pq.top();
        pq.pop();
        cout << "Serving Patient: " << p.name << " (Severity: " << p.sevearity << ")\n";

        // Remove from map too
        patients.erase(p.patient_no);
        savetofile();
    }

    void display()
    {
        if (patients.empty())
        {
            cout << "No Patients Available!\n";
            return;
        }
        for (auto &b : patients)
        {
            b.second.display();
        }
    }

private:
    void loadfromfile()
    {
        ifstream fin(filename);
        if (!fin.is_open())
            return;

        patients.clear();
        while (true)
        {
            int id, age, sevearity;
            string name, address;

            fin >> id >> age >> sevearity;
            if (fin.fail())
                break;
            fin.ignore();
            getline(fin, name);
            getline(fin, address);

            Patient p(id, age, name, address, sevearity);
            patients[id] = p;
            pq.push(p);
        }
        fin.close();
    }

    void savetofile()
    {
        ofstream fout(filename);
        for (auto &entry : patients)
        {
            Patient p = entry.second;
            fout << p.patient_no << " " << p.age << " " << p.sevearity << "\n";
            fout << p.name << "\n";
            fout << p.address << "\n";
        }
        fout.close();
    }
};

int main()
{
    Hospital p;
    int choice;
    do
    {
        cout << "\n------ Welcome To Hospital -------" << endl;
        cout << "1. Add Patient" << endl;
        cout << "2. Serve Patient" << endl;
        cout << "3. Patient Details" << endl;
        cout << "0. Exit" << endl;
        cout << "Enter your choice : ";
        cin >> choice;

        switch (choice)
        {
        case 1:
            p.add_patient();
            break;
        case 2:
            p.serve_patient();
            break;
        case 3:
            p.display();
            break;
        case 0:
            cout << "Exiting...\n";
            break;
        default:
            cout << "Invalid Choice\n";
        }
    } while (choice != 0);
    return 0;
}
