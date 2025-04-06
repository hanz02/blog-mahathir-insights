package com.mi.project_mh;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@WebServlet(name = "responseServlet", value = "/response-servlet")
public class ResponseServlet extends HttpServlet {

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

        request.setAttribute("name", request.getParameter("name"));
        request.setAttribute("email", request.getParameter("email"));
        request.setAttribute("phone", request.getParameter("phone"));
        request.setAttribute("message", request.getParameter("message"));

        request.getRequestDispatcher("/responsePage.jsp").forward(request, response);
    }
}