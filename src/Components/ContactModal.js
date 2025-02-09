import React, { useState, useEffect } from 'react';
import styles from './ContactModal.module.css';
import emailjs from '@emailjs/browser';

const ContactModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        message: ''
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
            setFormData({ message: '' });
        })
        .catch((err) => {
            console.error('Failed to send email:', err);
        });
    };

    const handleBackgroundClick = (e) => {
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
                            <label htmlFor="message">Message*</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className={styles.textarea}
                                required
                                rows="4"
                            />
                        </div>
                        <button type="submit" className={styles.submitButton}>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;