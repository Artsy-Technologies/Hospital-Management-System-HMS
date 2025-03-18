import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MedicalHistory = () => {
    const patientInfo = {
        name: "Alex John",
        status: "Active",
        age: 35,
        nationality: "USA",
        bloodType: "O+"
    };

    const records = [
        {
            title: "Diagnoses",
            description: "Hypertension diagnosed.",
            date: "2022-05-14",
            image: "link_to_image_1.jpg"
        },
        {
            title: "Treatments",
            description: "Physical therapy sessions.",
            date: "2023-01-10",
            image: "link_to_image_2.jpg"
        },
        {
            title: "Medications",
            description: "Prescribed Lisinopril.",
            date: null,
            status: "Active"
        },
        {
            title: "Allergies",
            description: "Allergic to penicillin.",
            status: "Critical"
        },
        {
            title: "Test Results",
            description: "Normal blood test results.",
            date: "2023-02-22"
        },
    ];

    return (
        // Use container-fluid to allow full-width layout
        <div className="container-fluid mt-4">
            {/* Patient Info Card */}
            <div className="card shadow-sm p-3 mb-4">
                <h2 className="text-center">{patientInfo.name}</h2>
                <p className="text-center text-muted">
                    Status: {patientInfo.status} | Age: {patientInfo.age} | Nationality: {patientInfo.nationality} | Blood Type: {patientInfo.bloodType}
                </p>
            </div>

            {/* Action Buttons */}
            <div className="d-flex justify-content-center mb-4">
                <button className="btn btn-outline-primary me-2">Record Book</button>
                <button className="btn btn-primary me-2">Consultation</button>
                <button className="btn btn-outline-danger">Add Note</button>
            </div>

            {/* Medical History Records */}
            <h3 className="mb-3 text-center">Medical History</h3>
            <div className="row">
                {records.map((record, index) => (
                    // Use col-12 for full width on small screens and col-md-6 for half width on medium screens and above
                    <div className="col-12 col-md-6 mb-4" key={index}>
                        <div className="card shadow-sm p-3 h-100">
                            <h5 className="card-title">{record.title}</h5>
                            <p className="card-text">{record.description}</p>
                            {record.date && <p className="text-muted">Date: {record.date}</p>}
                            {record.status && <p className="text-danger">Status: {record.status}</p>}
                            {record.image && <img src={record.image} alt={record.title} className="img-fluid mt-2 rounded" /> }
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <nav>
                <ul className="pagination justify-content-center">
                    <li className="page-item"><a className="page-link" href="#">Medical History</a></li>
                    <li className="page-item"><a className="page-link" href="#">Diagnoses</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default MedicalHistory;
