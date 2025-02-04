import React, { useState, useEffect } from 'react';
import styles from './ContactModal.module.css';
import emailjs from '@emailjs/browser';

const ContactModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        selection: ''
    });
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [isOpen]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send(
            'service_ib5mj0d',
            'template_h26dwm4',
            formData,
            'eoBIIGwXNu1PxDqtR'
        )
        .then(() => {
            onClose();
            setFormData({ name: '', email: '', selection: '' });
        })
        .catch((err) => {
            console.error('Failed to send email:', err);
        });
    };

    const handleBackgroundClick = (e) => {
        // Close if clicking the overlay or modalContent (background)
        if (e.target.className.includes(styles.modalOverlay) || 
            e.target.className.includes(styles.modalContent)) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div 
            className={`${styles.modalOverlay} ${isActive ? styles.active : ''}`}
            onClick={handleBackgroundClick}
        >
            <div className={styles.modalContent} onClick={handleBackgroundClick}>
                <div className={styles.form} onClick={(e) => e.stopPropagation()}>
                    <button className={styles.closeButton} onClick={onClose}>×</button>
                    <h2 className={styles.modalTitle}>Contact Us</h2>
                    <p>Tell us about yourself, and the appropriate member of our team will be in contact shortly.</p>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="name">Name*</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={styles.input}
                                required
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="email">Email*</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={styles.input}
                                required
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="selection">Which of the following best describes you or your firm?</label>
                            <select
                                id="selection"
                                name="selection"
                                value={formData.selection}
                                onChange={handleChange}
                                className={styles.select}
                                required
                            >
                                <option value="">Select an option</option>
                                <option value="Seeking capital">Seeking capital</option>
                                <option value="Institutional provider of capital">Institutional provider of capital</option>
                                <option value="Deposit-taking institution">Deposit-taking institution</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <button type="submit" className={styles.submitButton}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;