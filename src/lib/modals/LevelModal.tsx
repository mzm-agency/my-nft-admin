import React from "react";
import {Button, Col, Form, Input, Modal, Row} from 'antd';
import {Properties} from "csstype";

interface Props {
    title: string,
    show: boolean,
    close: Function,
}

const LevelModal = ({title, show, close}: Props) => {
    return (
        <Modal centered footer={null} title={title} visible={show} onCancel={() => close()} aria-labelledby="contained-modal-title-vcenter">
            <Form>
                1
            </Form>
        </Modal>
    )
}

export default LevelModal