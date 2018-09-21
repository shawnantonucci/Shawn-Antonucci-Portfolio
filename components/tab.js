
class ProjectPanel {
    constructor(domElement) {
        this.domElement = domElement;
        this.workbtn = this.domElement.querySelector('.workbtn')

        this.workbtn.addEventListener('click', () => {
            this.showAllWork();
        });

    }

    showAllWork() {
        const workbtn = document.querySelector('.workCard');
        workbtn.classList.toggle('active');
    }
}

class CertPanel {
    constructor(domElement) {
        this.domElement = domElement;
        this.certbtn = this.domElement.querySelector('.certbtn')

        this.certbtn.addEventListener('click', () => {
            this.showAllCert();
        });
    }

    showAllCert() {
        const certbtn = document.querySelector('.certificateCard');
        certbtn.classList.toggle('active');
    }
}




let work = document.querySelectorAll('#projects');

work = Array.from(work).map(domElement => {
    return new ProjectPanel(domElement);
})

let cert = document.querySelectorAll('#certification');

cert = Array.from(cert).map(domElement => {
    return new CertPanel(domElement);
})
