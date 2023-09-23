/*
 * YukiReflection - An efficient Reflection API for Java and Android built in Kotlin.
 * Copyright (C) 2019-2023 HighCapable
 * https://github.com/fankes/YukiReflection
 *
 * MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * This file is created by fankes on 2023/9/22.
 */
@file:Suppress("UsePropertyAccessSyntax")

package com.highcapable.yukireflection.demo_jvm

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.window.Window
import androidx.compose.ui.window.application
import androidx.compose.ui.window.rememberWindowState
import com.highcapable.yukireflection.YukiReflection
import com.highcapable.yukireflection.demo_jvm.test.Main
import com.highcapable.yukireflection.factory.buildOf
import com.highcapable.yukireflection.factory.classOf
import com.highcapable.yukireflection.factory.current
import com.highcapable.yukireflection.factory.field
import com.highcapable.yukireflection.factory.method
import com.highcapable.yukireflection.type.java.StringClass

@Composable
fun MainLayout() {
    val currentVersion = "YukiReflection Version: ${YukiReflection.API_VERSION_NAME}(${YukiReflection.API_VERSION_CODE})"
    val operationState = remember { mutableStateOf("Waiting for your operation") }
    Column(
        modifier = Modifier.fillMaxSize(),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text(
            text = "Using functions below to test",
            fontSize = 18.sp,
            modifier = Modifier.padding(bottom = 15.dp)
        )
        Text(
            text = operationState.value,
            fontSize = 18.sp,
            modifier = Modifier.padding(bottom = 35.dp)
        )
        Button(
            onClick = { operationState.value = Main("I am directly call of new object").getContent() },
            modifier = Modifier.padding(bottom = 15.dp)
        ) {
            Text(text = "Create an Object and Call Directly")
        }
        Button(
            onClick = {
                operationState.value =
                    classOf<Main>().buildOf("I am reflection call of new object") { param(StringClass) }
                        ?.current()
                        ?.method {
                            name = "getContent"
                            emptyParam()
                        }?.string() ?: ""
            },
            modifier = Modifier.padding(bottom = 15.dp)
        ) {
            Text(text = "Create an Object and Call Reflection")
        }
        Button(
            onClick = { operationState.value = Main.getStaticContent() },
            modifier = Modifier.padding(bottom = 15.dp)
        ) {
            Text(text = "Get Static and Call Directly")
        }
        Button(
            onClick = {
                operationState.value = classOf<Main>().method {
                    name = "getStaticContent"
                    modifiers { isStatic }
                }.get().string()
            },
            modifier = Modifier.padding(bottom = 15.dp)
        ) {
            Text(text = "Get Static and Call Reflection")
        }
        Button(
            onClick = {
                classOf<Main>().field {
                    name = "staticContent"
                    modifiers { isStatic }
                }.get().set("I am static! Modified by reflection")
                operationState.value = "Field is modified success"
            }
        ) {
            Text(text = "Modified Static Field Using Reflection")
        }
        Text(
            text = currentVersion,
            fontSize = 15.sp,
            modifier = Modifier.padding(top = 35.dp).alpha(0.55f)
        )
    }
}

fun main() = application {
    Window(
        onCloseRequest = ::exitApplication,
        title = "YukiReflection",
        resizable = false,
        state = rememberWindowState(width = 450.dp, height = 600.dp)
    ) { MaterialTheme(colorScheme = MaterialTheme.colorScheme.copy(primary = Color(0xFF31A4FF.toInt()))) { MainLayout() } }
}