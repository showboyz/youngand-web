import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { name, email, subject, message } = await request.json();

        // Nodemailer 설정
        const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        });

        const mailOptions = {
        from: email,
        to: 'andrew@youngandx.com',
        subject: subject,
        text: `이름: ${name}\n이메일: ${email}\n메시지:\n${message}`,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: '이메일이 성공적으로 전송되었습니다.' }, { status: 200 });
    } catch (error) {
        console.error('메일 전송 오류:', error);
        return NextResponse.json({ success: false, message: '이메일 전송에 실패했습니다.' }, { status: 500 });
    }
    }
